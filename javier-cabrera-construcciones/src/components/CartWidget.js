import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';

const CartWidget = (props) => {
    return(<div>
        <ShoppingCartIcon />
        <Box component="div" sx={{ display: 'inline' }}>{props.count}</Box>
    </div>
    );
}

export default CartWidget;