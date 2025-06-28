import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import React from 'react'

const StartupCard = ({ post }: { post: StartupCardType }) => {
    return (
        <li className="startup-card group">
            <div className="flex-between">
                <p className='startup-card__date'>
                    {formatDate(post._createdAt)}
                </p>
                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-primary" />
                    <span className="text-16-medium">{post.views}</span>
                </div>
            </div>
        </li>
    )
}

export default StartupCard