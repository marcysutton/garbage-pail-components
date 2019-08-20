import React, {useRef, useState} from "react"

import "./dialog-tabception.scss"

const DialogTabceptionDemo = () => {
    const dialogRef = useRef(null)
    const [activeTab, setActiveTab] = useState('1')

    const openDialog = () => {
        dialogRef.current.open = true
    }
    const closeDialog = () => {
        dialogRef.current.open = false
    }
    const openTab = (event) => {
        setActiveTab(event.target.getAttribute('data-id'))
        console.log(activeTab)
        console.log(event.target.getAttribute('data-id'))
    }
    return (
        <>
            <div className="modal-trigger-btn" onClick={openDialog}>Open modal</div>
            <dialog ref={dialogRef}>
                <div className="close" onClick={closeDialog}>X</div>
                <div className="tab-switcher">
                    <div className="tabs">
                        <div onClick={openTab} data-id="1" className={`tab ${activeTab === '1' ? 'active' : ''}`}>Cats</div>
                        <div onClick={openTab} data-id="2" className={`tab ${activeTab === '2' ? 'active' : ''}`}>Dogs</div>
                        <div onClick={openTab} data-id="3" className={`tab ${activeTab === '3' ? 'active' : ''}`}>Birds</div>
                    </div>
                    <div className={`tab-panel ${activeTab === '1' ? 'active' : ''}`}>Murr i hate humans they are so annoying bite off human's toes for jump up to edge of bath, fall in then scramble in a mad panic to get out so sleep everywhere, eat toilet paper.</div>
                    <div className={`tab-panel ${activeTab === '2' ? 'active' : ''}`}>Heckin good boys borking doggo h*ck puggo wrinkler woofer noodle horse, snoot puggo very jealous pupper heck floofs.</div>
                    <div className={`tab-panel ${activeTab === '3' ? 'active' : ''}`}>Shovels at rakes plows. Bulls at rose garden cucumbers mice sunflower wheat in pig. Turkey daisys eggs squeal, horses moonshin.</div>
                </div>
            </dialog>
        </>
    )
}

export default DialogTabceptionDemo
