
import React from 'react';

const SideElements = () => {
    return (
        <div className="p-4">
            <div className="bg-gray-800 p-4 rounded text-white mb-4 cursor-pointer flex items-center">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold">H1</span>
                </div>
                <div>Title</div>
            </div>
            <div className="bg-gray-800 p-4 rounded text-white mb-4 cursor-pointer flex items-center">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold">H2</span>
                </div>
                <div>Subtitle</div>
            </div>
            <div className="bg-gray-800 p-4 rounded text-white mb-4 cursor-pointer flex items-center">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold">P</span>
                </div>
                <div>Paragraph</div>
            </div>
            <div className="bg-gray-800 p-4 rounded text-white mb-4 cursor-pointer flex items-center">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold">—</span>
                </div>
                <div>Separator</div>
            </div>
        </div>
    );
};

export default SideElements;
