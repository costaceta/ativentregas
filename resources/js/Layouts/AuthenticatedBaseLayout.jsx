import FlashMessage from '@/Components/FlashMessage';
import {
    AppContent,
    AppFooter,
    AppHeader,
    AppSidebar
} from '@/Components/index';

export default function AuthenticatedBase({ children }) {
    return (
        <div>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader />
                <div className="body flex-grow-1 px-3">
                    <AppContent children={children} />
                </div>
                <AppFooter />
                <FlashMessage />
            </div>
      </div>
    );
}
