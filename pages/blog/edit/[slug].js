import { useRouter } from 'next/router';

const PostPage = props => {
    const router = useRouter()
    const { slug } = router.query
    return(
        <>
            {slug}
        </>
    );
}

export default PostPage;