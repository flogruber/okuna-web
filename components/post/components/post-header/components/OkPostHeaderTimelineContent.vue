<template>
    <div class="media">
        <div class="media-left">
            <nuxt-link :to="postCreatorUrl">
                <ok-user-avatar :user="post.creator"
                                :avatar-size="this.OkAvatarSize.medium">
                </ok-user-avatar>
            </nuxt-link>
        </div>
        <div class="media-content has-overflow-hidden">
            <div v-if="post.community">
                <nuxt-link :to="postCommunityUrl" class="is-flex align-items-center has-padding-bottom-5">
                    <ok-community-avatar :community="post.community"
                                         :avatar-size="OkAvatarSize.extraSmall"></ok-community-avatar>
                    <span class="title is-6 ok-has-text-primary-invert has-padding-left-5">
                        c/{{post.community.name}}
                    </span>
                </nuxt-link>
                <p class="subtitle is-7 ok-has-text-primary-invert-80">
                    <nuxt-link :to="postCreatorUrl">
                        <span class="has-text-weight-bold">
                            {{post.creator.profile.name}}
                        </span>
                        <span>
                            @{{post.creator.username}}
                        </span>
                    </nuxt-link>
                    <span>
                    ·
                    </span>
                    <span>
                    {{ post.created | moment("from", "now") }}
                </span>
                </p>
            </div>
            <div v-else>
                <p class="title is-6 ok-has-text-primary-invert">
                    <nuxt-link :to="postCreatorUrl">
                        <span class="has-text-weight-bold">
                            {{post.creator.profile.name}}
                        </span>
                    </nuxt-link>
                </p>
                <p class="subtitle is-7 ok-has-text-primary-invert-80">
                    <nuxt-link :to="postCreatorUrl">
                        <span class="has-text-weight-bold">
                            @{{post.creator.username}}
                        </span>
                    </nuxt-link>
                    <span>
                    ·
                </span>
                    <span>
                    {{ post.created | moment("from", "now") }}
                </span>
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
    import { Component, Prop, Vue } from "nuxt-property-decorator"
    import { IPost } from "~/models/posts/post/IPost";
    import OkUserAvatar from "~/components/avatars/user-avatar/OkUserAvatar.vue";
    import { OkAvatarSize } from "~/components/avatars/lib/OkAvatarSize";
    import OkCommunityAvatar from "~/components/avatars/community-avatar/OkCommunityAvatar.vue";

    @Component({
        name: "OkPostHeaderTimelineContent",
        components: {OkCommunityAvatar, OkUserAvatar},
    })
    export default class extends Vue {
        @Prop(Object) readonly post: IPost;

        OkAvatarSize = OkAvatarSize;

        mounted() {
        }

        get postCommunityUrl() {
            return `/c/${this.post.community.name}`;
        }

        get postCreatorUrl() {
            return `/${this.post.creator.username}`;
        }


    }
</script>
