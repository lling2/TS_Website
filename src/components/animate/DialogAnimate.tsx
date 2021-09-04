import { motion, AnimatePresence } from 'framer-motion';
import { 
  Dialog,
  Box,
  Paper,
  DialogProps
} from '@material-ui/core';

interface DialogAnimateProps extends DialogProps {
  animate?: object;
  onClose?: VoidFunction;
}

export default function DialogAnimate({
  open = false,
  animate,
  onClose,
  children,
  sx,
  ...other
}: DialogAnimateProps) {
  return (
    <AnimatePresence>
      {open && (
        <Dialog
          fullWidth
          maxWidth="xs"
          open={open}
          onClose={onClose}
          PaperComponent={(props) => (
            <Box
              component={motion.div}
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Box
                onClick={onClose}
                sx={{ width: '100%', height: '100%', position: 'fixed' }}
              />
              <Paper {...props}>{props.children}</Paper>
            </Box>
          )}
          {...other}
        >
          {children}
        </Dialog>
      )}
    </AnimatePresence>
  );
}
