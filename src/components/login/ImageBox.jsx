import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export default function ImageBox({ src, alt }) {
    return (
        <Box
            component="img"
            sx={{
                height: '90vh',
                width: '50%',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 8
            }}
            alt={alt}
            src={src}
        />
    );
}


ImageBox.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};