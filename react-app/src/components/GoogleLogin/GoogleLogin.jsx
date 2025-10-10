import { useGoogleLogin } from "@react-oauth/google"
/* npm i @react-oauth/google google-auth-library dotenv */
export default function GoogleLogin(props) {
   const googleLogin = useGoogleLogin({
      flow: "auth-code", // code-based Oauth2 flow
      redirect_uri: "http://localhost:5173",
      scope: "openid email profile",

      onError: console.warn,
      onSuccess: res => {
        console.log('useGoogleLogin res', res)

        const googleAuthCode = res.code
        // callout for exchanging code to access token
        fetch('http://localhost:3333/auth/google/access-token', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({code: googleAuthCode})
        })
        .then(console.log) // 200 OK
        .catch(console.warn)
      }
    })

  const {clientId} = props

    return (
        <button type="button" className="social-btn google-login"
                onClick={()=>googleLogin()}
        >Login with Google</button>
    )
}