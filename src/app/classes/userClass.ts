class User {
    public userName: string;
    public phone: string;
    public email: string;
    public companyNumber: string;
    public password: string;
    public clientCode: string;

    constructor(userName: string, phone: string, email: string, companyNumber: string, password: string,
        clientCode: string) {

        this.userName = userName;
        this.phone = phone;
        this.email = email;
        this.companyNumber = companyNumber;
        this.password = password;
        this.clientCode = clientCode;
    }
}
export { User }