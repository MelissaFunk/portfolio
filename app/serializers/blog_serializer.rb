class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :link, :image, :minutes
end
