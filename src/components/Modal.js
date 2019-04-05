import React from 'react';

import { Modal, Button } from 'react-materialize';

const trigger = <Button>Open Guide</Button>;

const modalFace = () => (
  <Modal header="User Instruction" trigger={trigger}>
    <blockquote><ul className="flow-text">
    <li>Below the default todo items' fields, type your todos one after another.</li><h/>
    <li>Press enter at the end of each item.</li>
    <li>Should you need to delete any item?</li>
    <li>Click on the item and off it will be deleted</li>
    </ul></blockquote>
  </Modal>
);

// const Modal = () =>{App Guide

//     return (
//         <div>
//         <div id="modal1" class="modal">
//             <div class="modal-content">
//                 <h4>Modal Header</h4>
//                 <p>A bunch of text</p>
//             </div>
//             <div class="modal-footer">
//                 <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
//             </div>
//         </div>
//         <button data-target="modal1" class="btn modal-trigger">Modal</button>
//         </div>
//     )
// }

// export default Modal
export default modalFace