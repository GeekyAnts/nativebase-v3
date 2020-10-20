import React from 'react';
import { Collapse, Stack, Heading, Button, Box } from 'native-base';
export default function () {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const [color, setColor] = React.useState('default');
  const handleColorToggle = () =>
    setColor(color === 'green' ? 'default' : 'green');
  return (
    <Stack space={4}>
      <Heading>Default Collapse</Heading>
      <Collapse
        onAnimationEnd={handleColorToggle}
        onAnimationStart={() => {
          console.log('animation started');
        }}
        startingHeight={30}
        isOpen={show}
        // endingHeight={40}
      >
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
        <Box p={8} bg="black" />
      </Collapse>
      <Button colorScheme={color} size="sm" onClick={handleToggle}>
        Show {show ? 'Less' : 'More'}
      </Button>
    </Stack>
  );
}
