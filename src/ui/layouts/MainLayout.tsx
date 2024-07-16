import React from 'react';
import { MainLayoutProps } from './types';

import { Header, Footer } from '@ui';

export const MainLayout: React.FC<MainLayoutProps> = ({ children, titleText }) => {
    return (
        <div className="flex flex-col w-full min-h-screen bg-background">
            <Header />
            <div className='p-4 max-w-screen-xl mx-auto w-full'>
                <h2 className='text-2xl text-text-title'>{ titleText }</h2>
            </div>
            <main className="flex w-full max-w-screen-xl mx-auto mb-4 px-4 gap-4">
                <div className='bg-container rounded-lg w-full p-4'>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};
