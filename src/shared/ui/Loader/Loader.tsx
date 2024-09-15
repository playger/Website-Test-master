import { classNames } from 'shared/lib/className/classNames';

import "./Loader.scss"
interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames("loadingio-spinner-dual-ball-nq4q5u6dq7r", {}, [className])}>
            <div className="ldio-x2uulkbinbj">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};