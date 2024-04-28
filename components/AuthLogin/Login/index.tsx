import React, { useState,useEffect } from 'react'
import useLogout from '../../../hooks/useLogout';
import { useStore } from '../../../store';
import AuthorBar from '../AuthorBar';
import Form from '../Form'

const Login = () => {
  const [active,setActive] = useState(false)
  const store = useStore();
  return (
    <div className=' text-neutral-700 '>
      <Form active={active}/>
      </div>
  )
}

export default Login