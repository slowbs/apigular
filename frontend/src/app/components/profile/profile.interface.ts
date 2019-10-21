export namespace Isession{
    
    export interface Response {
        message: string;
        session: Session;
      }
      
    export interface Session {
        email: string;
        phone: string;
      }

}