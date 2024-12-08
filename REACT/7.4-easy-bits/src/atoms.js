import { atom, selector } from "recoil";

export const networkAtom = atom({
    key:"network Atom",
    default:102
});


export const jobsAtom = atom({
    key:"jobs Atom",
    default:0
});

export const notificationAtom = atom({
    key:"notification Atom",
    default:12
});

export const messagingAtom = atom({
    key:"messaging Atom",
    default:0
});

export const totalNotficationSelector = selector({
    key:"total Notification Selector",
    get:({get}) => {
        const networkAtomcount = get(networkAtom);
        const jobsAtomcount = get(jobsAtom);
        const messagingAtomcount =get(messagingAtom);
        const notificationAtomcount=get(notificationAtom);
        return networkAtomcount+jobsAtomcount+messagingAtomcount+notificationAtomcount;
    }
});