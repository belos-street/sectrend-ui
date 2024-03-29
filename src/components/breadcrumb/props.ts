import type { ExtractPropTypes } from 'vue'
export const breadcrumbProps = {
  separator: {
    type: String,
    default: '/'
  }
}

export const breadcrumbItemProps = {
  clickable: Boolean,
  href: String,
  isLast: Boolean
}

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>

export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>
