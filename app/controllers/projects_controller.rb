class ProjectsController < ApplicationController
  def index
    render json: Project.all, status: :ok
  end

  def show
    project = Project.find_by(id: params[:id])
    render json: project, status: :ok
  end
end
