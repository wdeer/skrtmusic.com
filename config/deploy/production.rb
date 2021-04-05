set :stage, :production
# set :branch, :otherBranch

set :deploy_to, -> { "/home/#{fetch(:user)}/#{fetch(:application)}" }

server fetch(:server), user: fetch(:user), roles: %w{web app db}

set :ssh_options, {
  keys: %w(~/.ssh/id_rsa),
  forward_agent: true
}
