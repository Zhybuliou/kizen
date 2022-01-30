import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer';



const File = ({file, color}) => {
   const dispatch = useDispatch();
   const currentDir = useSelector(state => state.files.currentDir)

   function openDirHandler(file) {
       if(file.type === 'dir'){
        dispatch(pushToStack(currentDir))
        dispatch(setCurrentDir(file._id));
       }
    }

    return (
        <div className={color} onClick={() => {openDirHandler(file)}}>
            <div className="file__name">{file.name}</div>
            <div className="file__date">{file.date}</div>
        </div>
    );
};

export default File;
