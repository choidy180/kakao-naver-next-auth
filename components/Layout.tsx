import Header from './Header';
import { Container } from '@chakra-ui/react';
import Footer from './Footer';

type Props = {
    children: React.ReactNode;
}

export default function Layout(props: Props){
    return (
        <>
            <Container maxW="container.xl" p={0}>
                <Header/>
                {props.children}
                <Footer/>
            </Container>
        </>
    )
}