import { Invoice } from '../types';

export const validate = (values: Invoice) => {
   let errors = {} as any;

   // Sender Validation
   if (!values.senderAddress.street) {
      errors = {
         ...errors,
         senderAddress: {
            ...errors.senderAddress,
            street: `Can't be empty!`,
         },
      };
   }

   if (!values.senderAddress.country) {
      errors = {
         ...errors,
         senderAddress: {
            ...errors.senderAddress,
            country: `Can't be empty!`,
         },
      };
   }

   if (!values.senderAddress.postCode) {
      errors = {
         ...errors,
         senderAddress: {
            ...errors.senderAddress,
            postCode: `Can't be empty!`,
         },
      };
   }

   if (!values.senderAddress.city) {
      errors = {
         ...errors,
         senderAddress: {
            ...errors.senderAddress,
            city: `Can't be empty!`,
         },
      };
   }

   // Client Validation
   if (!values.clientName) {
      errors.clientName = `Can't be empty!`;
   }

   if (!values.clientEmail) {
      errors.clientEmail = `Can't be empty!`;
   } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.clientEmail)
   ) {
      errors.clientEmail = 'Invalid e-mail format!';
   }

   if (!values.clientAddress.street) {
      errors = {
         ...errors,
         clientAddress: {
            ...errors.clientAddress,
            street: `Can't be empty!`,
         },
      };
   }

   if (!values.clientAddress.country) {
      errors = {
         ...errors,
         clientAddress: {
            ...errors.clientAddress,
            country: `Can't be empty!`,
         },
      };
   }

   if (!values.clientAddress.postCode) {
      errors = {
         ...errors,
         clientAddress: {
            ...errors.clientAddress,
            postCode: `Can't be empty!`,
         },
      };
   }

   if (!values.clientAddress.city) {
      errors = {
         ...errors,
         clientAddress: {
            ...errors.clientAddress,
            city: `Can't be empty!`,
         },
      };
   }

   if (!values.description) {
      errors.description = `Can't be empty!`;
   }

   if (!values.createdAt) {
      errors.createdAt = `Can't be empty!`;
   }

   if (values.items.length === 0) {
      errors.items = 'An item must be added!';
   }

   return errors;
};
