type Props = {
    children?: React.ReactNode;
};

const List = (props: Props) => {
    const { children } = props;

    return (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{children}</ul>
    );
};

export default List;
