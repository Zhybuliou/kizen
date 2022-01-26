import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../../actions/file.js';
import FileList from './fileList/FileList.jsx';
import './disk.scss';
import User from '../user/User.jsx';

export default function Disk() {
    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.files.currentDir);

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir, dispatch])

  return (
  <div className='disk'>
    <User />
    <FileList/>
  </div>
  )
}
