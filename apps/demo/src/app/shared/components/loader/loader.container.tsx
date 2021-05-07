import React from 'react';

import { LoaderContainer, LoaderOverlay } from './loader.styles';

const WithLoader = WrappedComponent => {
    const Loader = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <LoaderOverlay>
                <LoaderContainer />
            </LoaderOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    }

    return Loader;
}

export default WithLoader;