import React, {useState} from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword,sendEmailVerification } from 'firebase/auth';
import { Auth } from 'firebase/auth';

function SignIn() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [gender, setGender] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<null|string>(null)
  const [message, setMessage] = useState<null|string>(null)
  const router = useRouter()

  
  return (
    <div>SignIn</div>
  )
}

export default SignIn