import * as React from 'react';
import { connect, WithCerebral } from 'app/fluent';

import Margin from 'common/components/spacing/Margin';
import Badge from 'common/utils/badges/Badge';
import { Title } from '../elements';

const Badges: React.SFC<WithCerebral> = ({ store, signals }) => {
    const badgesCount = store.user.badges.length;

    return (
        <div>
            <Title>Badges</Title>
            <strong>
                You currently have {badgesCount} badge{badgesCount === 1 ? '' : 's'}. You can click on the badges to
                toggle visibility.
            </strong>
            <Margin top={2}>
                {store.user.badges.map((badge) => (
                    <Badge
                        key={badge.id}
                        tooltip={false}
                        onClick={(b) =>
                            signals.preferences.setBadgeVisibility({
                                ...b,
                                visible: !b.visible
                            })}
                        badge={badge}
                        visible={badge.visible}
                        size={128}
                    />
                ))}
            </Margin>
        </div>
    );
};

export default connect()(Badges);
