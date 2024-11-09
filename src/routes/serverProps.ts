
export const getServerSideProps = (async () => {
    const response = await fetch("")
    const pageData = await response.json()

    return { 
        props: {
            todos: pageData
        }
    }
})