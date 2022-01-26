import React from 'react';
// import dirLogo from '../../../../assets/img/dir.svg'
// import fileLogo from '../../../../assets/img/file.svg'
const File = ({file}) => {
    return (
        <div className='file'>
            <div>-------------------------------------</div>
            <div className="file__name">{file.name}</div>
            <div className="file__date">{file.date}</div>
        </div>
    );
};

export default File;
