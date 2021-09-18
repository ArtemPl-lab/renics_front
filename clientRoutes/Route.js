import { useRouter } from "next/router";
export const Route = (props) => {
    const router = useRouter();
    if(!props.path) throw "Route component must have 'path' props";
    if(router.asPath.includes(props.path)) return props.component ? <props.component /> : props.children;
    return <></>;
}