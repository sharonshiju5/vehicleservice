import React, { useState } from 'react'
import { AiOutlineCamera, AiOutlineClose } from 'react-icons/ai'

function IssueDescribe() {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([])

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedFiles(prev => [...prev, ...Array.from(e.target.files!)])
        }
    }

    const removeFile = (index: number) => {
        setSelectedFiles(prev => prev.filter((_, i) => i !== index))
    }

    return (
        <div className="w-[90%] rounded-xl mt-2 mx-auto pb-18">
            <h2 className="font-medium mb-3">Describe the issue</h2>

            <textarea
                className="w-full h-[110px] p-3 border border-gray-100 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-700"
                placeholder="Describe the issue in detail..."
            ></textarea>

            {selectedFiles.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                    {selectedFiles.map((file, index) => (
                        <div key={index} className="relative">
                            {file.type.startsWith('image/') ? (
                                <div className="relative">
                                    <img 
                                        src={URL.createObjectURL(file)} 
                                        alt={file.name}
                                        className="w-16 h-16 object-cover rounded border"
                                    />
                                    <AiOutlineClose 
                                        className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 cursor-pointer hover:bg-red-600" 
                                        onClick={() => removeFile(index)}
                                    />
                                </div>
                            ) : (
                                <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded text-sm">
                                    <span className="truncate max-w-20">{file.name}</span>
                                    <AiOutlineClose 
                                        className="text-gray-500 cursor-pointer hover:text-red-500" 
                                        onClick={() => removeFile(index)}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            <label
                htmlFor="file-upload"
                className="flex items-center justify-center mt-2 mb-4 gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg border border-gray-300 shadow-sm transition"
            >
                <AiOutlineCamera className="text-gray-600 text-lg" />
                <span className="text-gray-700 font-medium">Upload Photos</span>
                <input id="file-upload" type="file" className="hidden" multiple onChange={handleFileSelect} />
            </label>
        </div>
    )
}

export default IssueDescribe