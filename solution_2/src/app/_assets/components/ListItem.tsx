type Props = {
    children?: React.ReactNode;
};

const ListItem = (props: Props) => {
    const { children } = props;

    return (
        <li className="flex flex-col items-center text-center gap-2">
            {children}
        </li>
    );
};

export default ListItem;
