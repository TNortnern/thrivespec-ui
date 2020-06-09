import React from 'react';
import { H1 } from 'native-base'
import propTypes from 'prop-types'
const PageTitle = ({title}) => {
return <H1 style={{ fontWeight: "bold", fontSize: 34 }}>{ title }</H1>;
}

PageTitle.propTypes = {
    title: propTypes.string.isRequired
}

export default PageTitle;