import React, { useEffect, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    let [name, setName] = useState('');
    let [phoneNum, setPhoneNum] = useState('');
    let [errorMsg1, setErrorMsg1] = useState('');
    let [errorMsg2, setErrorMsg2] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (phoneNum.length === 10) {
            setPhoneNum(phoneNum.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        }
        if (phoneNum.length === 13) {
            setPhoneNum(phoneNum.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
    }, [phoneNum]);


    //숫자만 입력가능하게
    const handlePhoneNum = (e) => {
        const regex = /^[0-9\b -]{0,13}$/;
        
        if (regex.test(e.target.value)) {
            setPhoneNum(e.target.value);
        }

        if (errorMsg2 != '') {
            setErrorMsg2('')
        }
    }


    const addContact = (e) => {
        e.preventDefault();

        if (errorMsg1 != '' || errorMsg2 != '') {
            setErrorMsg1('')
            setErrorMsg2('')
        }

        if (/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(phoneNum) && name != '') {
            dispatch({ type: 'ADD_CONTECT', payload: { name, phoneNum } });
            setName('');
            setPhoneNum('');
        } else if(name == ''){
            setErrorMsg1('이름을 입력해주세요.')
        } else {
            setErrorMsg2('유효하지 않는 전화번호입니다.')
        }
    }
    return (
        <Form onSubmit={(e) => addContact(e)}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>이름</Form.Label>
                <Form.Control type="text" value={name}
                    onChange={(e) => {
                        setName(e.target.value);

                        if (errorMsg1 != '') {
                            setErrorMsg1('')
                        }
                    }}
                    placeholder="이름을 입력해주세요." />
                <Form.Text className="text-danger">
                    {errorMsg1}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formContext">
                <Form.Label>전화번호</Form.Label>
                <Form.Control type="text" value={phoneNum} onChange={(e) => handlePhoneNum(e)} placeholder="전화번호를 입력해주세요." />
                <Form.Text className="text-danger">
                    {errorMsg2}
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                등록하기
            </Button>
        </Form>
    );
};

export default ContactForm;