import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ChatMessages = () => {
    const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <React.Fragment>
      <Button onClick={handleClickOpen('paper')}
      className='font-sfPro font-semibold text-[1.1rem] text-[#6F1920]'>
        See Chat Messages</Button>
      
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description" 
        
      >
        <DialogTitle id="scroll-dialog-title"
                    className='font-sfPro font-bold text-[#4F4F4F]'
                    >Chat Messages</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >

<div className=''>
    <div className='border rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-none my-4 p-2'> 
            
        <p className='font-sfPro font-bold text-[1.2rem] py-1'>@user123</p>
        <p className='font-sfPro text-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className='border rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-none p-2 my-4'> 
            
            <p className='font-sfPro font-bold text-[1.2rem] py-1'>@user123</p>
            <p className='font-sfPro text-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
     </div>
     <div className='border rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-none p-2 my-4'> 
            
            <p className='font-sfPro font-bold text-[1.2rem] py-1'>@user123</p>
            <p className='font-sfPro text-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
     </div>
     <div className='border rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-none p-2 my-4'> 
            
            <p className='font-sfPro font-bold text-[1.2rem] py-1'>@user123</p>
            <p className='font-sfPro text-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
     </div>

     <div className='border rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-none p-2 my-4'> 
            
            <p className='font-sfPro font-bold text-[1.2rem] py-1'>@user123</p>
            <p className='font-sfPro text-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
     </div>
     <div className='border rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-none p-2 my-4'> 
            
            <p className='font-sfPro font-bold text-[1.2rem] py-1'>@user123</p>
            <p className='font-sfPro text-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
     </div>

</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}
          className='text-transform-none font-sfPro font-semibold text-[#6F1920]'>Close</Button>
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default ChatMessages