import { useGoogleLogin } from "@react-oauth/google"
export default function GoogleLogin(props) {
   const googleLogin = useGoogleLogin({
      flow: "auth-code", // code-based Oauth2 flow
      redirect_uri: "http://localhost:5173",
      scope: "openid email profile",

      onError: console.warn,
      onSuccess: res => {
        console.log('useGoogleLogin res', res)
      }
    })

  const {clientId} = props

    return (
        <button type="button" className="social-btn google-login"
                onClick={()=>googleLogin()}
        >Login with Google</button>
    )
}