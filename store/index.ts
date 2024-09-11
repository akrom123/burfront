import { registrationModelSchema } from '@/schemas';
import { makeAutoObservable } from "mobx";
export class AppStore {
    constructor() {
        makeAutoObservable(this);
    }
    isLoggedIn = false;

    modal = {
        auth: false,
        registration: false,
        forgot: false,
    }

    notifications = Array(5).fill({
        title: 'Заголовок уведомления',
        description: 'Lorem ipsum dolor sit amet consectetur. Ac faucibus odio leo fringilla laoreet ac sed amet vulputate. Id eu elit interdum sagittis nulla. ',
    })

    toggleModal = (name: keyof AppStore['modal'], value?: boolean) => {
        this.modal[name] = value !== undefined ? value : !this.modal[name];
    }
    setLoggedIn = (value: boolean) => {
        this.isLoggedIn = value;
    }
}

export default new AppStore();