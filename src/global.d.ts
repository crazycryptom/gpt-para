declare namespace gapi {
    namespace auth2 {
      function init(params: {
        client_id: string;
      }): GoogleAuth;
  
      function getAuthInstance(): GoogleAuth;
  
      interface GoogleAuth {
        signIn(): Promise<GoogleUser>;
        isSignedIn: {
          get(): boolean;
        };
        signOut(): Promise<void>;
      }
  
      interface GoogleUser {
        getAuthResponse(): {
          id_token: string;
        };
        getBasicProfile(): {
          getName(): string;
          getEmail(): string;
        };
      }
    }
  }
  
  declare module 'google-auth-library';