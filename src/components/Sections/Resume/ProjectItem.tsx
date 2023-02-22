import {FC, memo} from 'react';

import {ProjectItem} from '../../../data/dataDef';

const ProjectItem: FC<{item: ProjectItem}> = memo(({item}) => {
  const {title, date, link, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">
            <a href={link}>{title}</a>
        </h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

ProjectItem.displayName = 'ProjectItem';
export default ProjectItem;