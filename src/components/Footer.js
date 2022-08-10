export default function Footer () {

    const currentYear = new Date ().getFullYear();

    return (
        <Footer>
            <p>Copyright &copy; {currentYear}</p>
        </Footer>
    );
}

