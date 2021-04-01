/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */



import { ScopedElementsMixin, LitElement, html } from '@lion/core';
import { Styles } from './element-styles.js';
import { LionInputDate } from '@lion/input-date';
import { LionInput } from '@lion/input';
import { LionButton } from '@lion/button';
import { LionInputIban } from '@lion/input-iban'
import { LionInputAmount } from '@lion/input-amount';
import { LionInputEmail } from '@lion/input-email';
import { LionTextarea} from '@lion/textarea';
import {LionCheckboxGroup, LionCheckbox} from '@lion/checkbox-group';
import { LionRadioGroup, LionRadio } from '@lion/radio-group';

export class MyElement extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'lion-input': LionInput,
      'lion-button': LionButton,
      'lion-input-date':LionInputDate,
     'lion-input-iban':LionInputIban,
    'lion-input-amount':LionInputAmount,
      'lion-input-email':LionInputEmail,
      'lion-textarea':LionTextarea,
      'Lion-checkbox-group':LionCheckboxGroup,
       'Lion-checkbox':LionCheckbox,
      'lion-radio-group':LionRadioGroup,
      'lion-radio':LionRadio,
      Styles,

    };

  }
 static get styles() {
       return Styles;
     }
     constructor() {
         super();
         this.firstname = "";
         this.lastname ="";
         this.date = "12/12/2020";
         this.biography= "";
         this.money =" 0.00";
         this.iban ="";
         this.email ="";
         this.comments ="";
         
       }
 
  render() {
    return html`
    <div class="main">
    <div class="container">
    <div class="firstname">
        <p>First Name</p>
        <lion-input name="firstName" .value="${this.firstname}" @change="${this.getFirstName}"></lion-input>
    </div>
    <div class="lastname">
            <p>Last Name</p>
           <lion-input name="lastName" .value="${this.lastname}" @change="${this.getLastName}"></lion-input>
    </div>
    <div class="date">
            <p>Date</p>
            <lion-input-date  name="date" .value="${this.date}" @change="${this.getDate}"></lion-input-date>
        </div>
    <div class="biography">
            <p>Biography</p>
            <lion-textarea .value="${this.biography}" @change="${this.getBiography}"></lion-textarea>
        </div>
    <div class="money">
            <p>Money</p>
           <lion-input-amount name="money" .value="${this.money}" @change="${this.getMoney}"></lion-input-amount>
        </div>
    <div class="iban">
             <p>Iban</p>
              <lion-input-iban  name="iban" .value="${this.iban}" @change="${this.getiban}"></lion-input-iban>
         </div>
    <div class="email">
             <p>Email</p>
              <lion-input-email name="email" .value="${this.email}"
               @change="${this.getEmail}"></lion-input-email>
         </div>



 <div class="comments">
             <p>Comments</p>
               <lion-textarea .value="${this.comment}" @change="${this.getComment}"></lion-textarea>
         </div>


 <div class="button">
            <lion-button class="buttoninner" type="submit"  @click="${this.onSubmit}">Submit</lion-button>
         </div>




    </div>
     </div>
    `;

  }

  getFirstName(e) {
      this.firstname = e.target.value;
      }
  getLastName(e) {
        this.lastname = e.target.value;
        }
  getDate(e) {
        this.date = e.target.value;
        }
  getBiography(e) {
        this.biography = e.target.value;
        }
  getMoney(e) {
        this.money = e.target.value;
        }
   getiban(e) {
          this.iban = e.target.value;
          }
   getEmail(e) {
          this.email = e.target.value;
          }
   getComment(e) {
          this.comment = e.target.value;
          }
onSubmit(){
console.log("first name",this.firstname)
console.log("last name",this.lastname)
console.log("date",this.date)
console.log("biography",this.biography)
console.log("money",this.money)
console.log("iban",this.iban)
console.log("email",this.email)
console.log("comment",this.comment)


}

}

customElements.define('my-element', MyElement);
