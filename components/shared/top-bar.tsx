import { cn } from "@/lib/utils";
import { Container, Categories, SortPopup } from '../shared'

interface TProps {
    className?: string;
}

export const TopBar = ({className}: TProps) => {
    return (
        <div className={cn("sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10", className)}>
            <Container>
                <Categories />
                <SortPopup />
            </Container>
        </div>
    );
};