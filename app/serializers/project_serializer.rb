class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :link, :youtube, :github, :description, :image
end
