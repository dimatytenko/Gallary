import {FC} from 'react';
import {Pagination as AntdPagination} from 'antd';
import {useSearchParams} from 'react-router-dom';

interface IPaginationProps {
  showSizeChanger?: boolean;
  total?: number;
  pageSizeOptions?: string[];
}

export const Pagination: FC<IPaginationProps> = ({showSizeChanger, total, pageSizeOptions}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const onChange = (page: number, perPage: number) => {
    setSearchParams({page: page.toString(), per_page: perPage.toString()});
  };

  return (
    <AntdPagination
      current={Number(searchParams.get('page')) || 1}
      showSizeChanger={showSizeChanger || true}
      defaultPageSize={Number(searchParams.get('per_page')) || 15}
      total={total || 15}
      onChange={onChange}
      pageSizeOptions={pageSizeOptions || ['15', '20', '25', '30']}
    />
  );
};
