import { Box } from '@chakra-ui/react';
import { memo } from 'react';

const CustomDivider = ({ ...props }) => <Box w="140px" h="1px" bg="ourBlack" {...props} />;

export default memo(CustomDivider);
