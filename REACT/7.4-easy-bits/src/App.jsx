import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotficationSelector } from './atoms'

function App() {
 return <RecoilRoot>
   <MainApp/>
 </RecoilRoot>
}

function MainApp(){
  const networknotificationcount = useRecoilValue(networkAtom);
  const jobsnotificationcount = useRecoilValue(jobsAtom);
  const notificationcount = useRecoilValue(notificationAtom);
  const messagingnotificationcount = useRecoilValue(messagingAtom);
  const totalnotificationcount = useRecoilValue(totalNotficationSelector);

    return (
     <div>
      <button>Home</button>
  
      <button>My network ({networknotificationcount >= 100 ? "99+":networknotificationcount})</button>
      <button>Jobs ({jobsnotificationcount})</button>
      <button>Messaging ({messagingnotificationcount})</button>
      <button>Notifications ({notificationcount})</button>
        
      <button>Me ({totalnotificationcount})</button>
     </div>
    )
}

/* function ButtonUpdater(){
  const setMessagingAtomcount=useSetRecoilState(messagingAtom);
    return   <button onClick={()=>{
      setMessagingAtomcount(c => c+1);
    }}>Me</button>
} */

export default App
