import { toast } from 'react-toastify';

export function copyText(text) {
  navigator.clipboard.writeText(text).then(
    () => {
      console.log('Text copied to clipboard');
      toast.success('copied');
    },
    (err) => {
      console.error('Error in copying text: ', err);
      toast.error('error');
    }
  );
}
