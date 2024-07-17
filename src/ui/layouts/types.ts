import { ReactNode } from 'react';

export interface MainLayoutProps {
    children: ReactNode;
    titleText: string;
    breadcumbComponent?: ReactNode;
}