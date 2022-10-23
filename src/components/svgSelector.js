import React from 'react';

const SvgSelector = ({id}) => {
    switch (id) {
        case 'arrow-up':
            return (
                <svg width="20" height="20" viewBox="0 0 163 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M81.5 0.508621L162.496 81.5043L133.504 110.496L102 78.9914V250H61V78.9914L29.4957 110.496L0.504303 81.5043L81.5 0.508621Z" fill="black"/>
                </svg>
            );
        case 'arrow-down':
            return (
                <svg width="20" height="20" viewBox="0 0 163 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M81.5 250L0.504311 169.004L29.4957 140.013L61 171.517L61 0.508622L102 0.508619L102 171.517L133.504 140.013L162.496 169.004L81.5 250Z" fill="black"/>
                </svg>
            )
        default: return
    }
};

export default SvgSelector;